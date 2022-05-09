import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { DefaultRequestBody, rest } from 'msw';
import {
  DogBreeds,
  BreedFilter,
  BreedImage,
  BreedLink,
  BreedNavControls,
  BreedShuffle,
  SubBreeds,
} from './';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get<DefaultRequestBody>(
    'https://dog.ceo/api/breeds/list/all',
    (_req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message: {
            affenpinscher: [],
            cattledog: ['australian'],
            labrador: [],
          },
          status: 'success',
        })
      );
    }
  ),
  rest.get<DefaultRequestBody>(
    `https://dog.ceo/api/breed/affenpinscher/images/random`,
    (_req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message:
            'https://images.dog.ceo/breeds/affenpinscher/n02110627_11365.jpg',
          status: 'success',
        })
      );
    }
  ),
  rest.get<DefaultRequestBody>(
    `https://dog.ceo/api/breed/test/images/random`,
    (_req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message: 'Breed not found (master breed does not exist)',
          status: 'error',
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Dog Breeds', () => {
  it('should render the breeds list', async () => {
    render(<DogBreeds />);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Loading dogs...')
    );
    const list = screen.getByRole('list', { name: 'Dog Breeds' });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  it('should render and update heading', async () => {
    render(
      <MemoryRouter>
        <DogBreeds />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Loading dogs...')
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('No Dog Breed Selected');
    const breedButton = screen.getByRole('button', {
      name: 'affenpinscher',
    });
    userEvent.click(breedButton);
    expect(heading).toHaveTextContent('affenpinscher');
  });

  describe('Breed Image', () => {
    it('should render the breed image', async () => {
      render(<BreedImage breed="affenpinscher" />);
      await waitForElementToBeRemoved(() => screen.queryByTestId('big-heart'));
      const image = screen.getByAltText('An awesome affenpinscher dog');
      expect(image).toHaveAttribute(
        'src',
        'https://images.dog.ceo/breeds/affenpinscher/n02110627_11365.jpg'
      );
    });

    it('should render error message', async () => {
      render(<BreedImage breed="test" />);
      await waitForElementToBeRemoved(() => screen.queryByTestId('big-heart'));
      const error = screen.getByText('Error loading image.');
      expect(error).toBeInTheDocument();
    });
  });

  it('should render the filter input and test basic functionalities', () => {
    render(
      <BreedFilter filter="labrador" onSetFilter={(e) => e.target.value} />
    );
    const filterInput = screen.getByPlaceholderText('Filter dog breeds');
    expect(filterInput).toBeInTheDocument();
    expect(filterInput).toHaveValue('labrador');
    userEvent.click(filterInput);
    expect(filterInput).toHaveFocus();
  });

  describe('Nav Controls', () => {
    it('should render previous button and check if it is not disabled', () => {
      render(
        <BreedNavControls
          allDogBreeds={['Affenpinscher', 'Labrador', 'Waterdog']}
          activeBreed="Labrador"
          getPreviousBreed={() => {}}
          getNextBreed={() => {}}
          getRandomBreed={() => {}}
        />
      );
      const previousButton = screen.getByRole('button', {
        name: 'Previous Breed',
      });
      expect(previousButton).toBeInTheDocument();
      expect(previousButton).not.toBeDisabled();
    });

    it('should render previous button and check if it is disabled', () => {
      render(
        <BreedNavControls
          allDogBreeds={['Affenpinscher', 'Labrador', 'Waterdog']}
          activeBreed="Affenpinscher"
          getPreviousBreed={() => {}}
          getNextBreed={() => {}}
          getRandomBreed={() => {}}
        />
      );
      const previousButton = screen.getByRole('button', {
        name: 'Previous Breed',
      });
      expect(previousButton).toBeInTheDocument();
      expect(previousButton).toBeDisabled();
    });

    it('should render next button and check if it is not disabled', () => {
      render(
        <BreedNavControls
          allDogBreeds={['Affenpinscher', 'Labrador', 'Waterdog']}
          activeBreed="Labrador"
          getPreviousBreed={() => {}}
          getNextBreed={() => {}}
          getRandomBreed={() => {}}
        />
      );
      const nextButton = screen.getByRole('button', {
        name: 'Next Breed',
      });
      expect(nextButton).toBeInTheDocument();
      expect(nextButton).not.toBeDisabled();
    });

    it('should render next button and check if it is disabled', () => {
      render(
        <BreedNavControls
          allDogBreeds={['Affenpinscher', 'Labrador', 'Waterdog']}
          activeBreed="Waterdog"
          getPreviousBreed={() => {}}
          getNextBreed={() => {}}
          getRandomBreed={() => {}}
        />
      );
      const nextButton = screen.getByRole('button', {
        name: 'Next Breed',
      });
      expect(nextButton).toBeInTheDocument();
      expect(nextButton).toBeDisabled();
    });

    it('should render shuffle button', () => {
      render(
        <BreedNavControls
          allDogBreeds={['Affenpinscher', 'Labrador', 'Waterdog']}
          activeBreed="Labrador"
          getPreviousBreed={() => {}}
          getNextBreed={() => {}}
          getRandomBreed={() => {}}
        />
      );
      const shuffleButton = screen.getByRole('button', {
        name: 'Random Breed',
      });
      expect(shuffleButton).toBeInTheDocument();
    });
  });

  it('should render big shuffle icon', () => {
    render(<BreedShuffle allDogBreeds={[]} getRandomBreed={() => {}} />);
    const bigShuffleIcon = screen.getByTestId('big-shuffle');
    expect(bigShuffleIcon).toBeInTheDocument();
  });

  it('should render breed link', () => {
    render(
      <MemoryRouter>
        <BreedLink breed="labrador" />
      </MemoryRouter>
    );
    const breedLink = screen.getByRole('link', {
      name: 'View more labrador images Arrow Right',
    });
    expect(breedLink).toBeInTheDocument();
  });

  describe('Sub-breeds', () => {
    it("should render sub-breeds message if it's a breed without sub-breeds", () => {
      render(
        <MemoryRouter>
          <SubBreeds
            allDogBreeds={['affenpinscher', 'cattledog']}
            subBreeds={[[], ['australian']]}
            breed="affenpinscher"
          />
        </MemoryRouter>
      );
      const subBreedsMessage = screen.getByText('No sub-breeds found.');
      expect(subBreedsMessage).toBeInTheDocument();
    });

    it("should render sub-breeds if it's a breed with sub-breeds", () => {
      render(
        <MemoryRouter>
          <SubBreeds
            allDogBreeds={['affenpinscher', 'cattledog']}
            subBreeds={[[], ['australian']]}
            breed="cattledog"
          />
        </MemoryRouter>
      );
      const subBreedLink = screen.getByRole('link', { name: 'australian' });
      expect(subBreedLink).toBeInTheDocument();
    });
  });
});
