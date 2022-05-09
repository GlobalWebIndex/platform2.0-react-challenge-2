import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '../../test-utils';
import { setupServer } from 'msw/node';
import { DefaultRequestBody, rest } from 'msw';
import { DogBreedImages } from './';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get<DefaultRequestBody>(
    'https://dog.ceo/api/breed/labrador/images',
    (_req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message: [
            'https://images.dog.ceo/breeds/labrador/IMG_2752.jpg',
            'https://images.dog.ceo/breeds/labrador/IMG_4708.jpg',
            'https://images.dog.ceo/breeds/labrador/IMG_4709.jpg',
            'https://images.dog.ceo/breeds/labrador/IMG_6236.JPG',
          ],
          status: 'success',
        })
      );
    }
  ),
  rest.get<DefaultRequestBody>(
    'https://dog.ceo/api/breed/test/images',
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

describe('Dog Breed Images', () => {
  it('should render dog breed images', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/breeds/labrador' }]}>
        <DogBreedImages />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('image-grid-skeleton')
    );
    fireEvent.scroll(window);
    const list = screen.getByRole('list', { name: 'labrador images' });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
  });

  it('should render error message when breed does not exist', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/breeds/test' }]}>
        <DogBreedImages />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('image-grid-skeleton')
    );
    const errorMessage = screen.getByText(
      'Breed not found (master breed does not exist)'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
