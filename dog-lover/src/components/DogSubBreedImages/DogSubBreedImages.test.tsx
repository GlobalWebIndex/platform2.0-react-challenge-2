import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '../../test-utils';
import { setupServer } from 'msw/node';
import { DefaultRequestBody, rest } from 'msw';
import { DogSubBreedImages } from './';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get<DefaultRequestBody>(
    'https://dog.ceo/api/breed/cattledog/australian/images',
    (_req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message: [
            'https://images.dog.ceo/breeds/cattledog-australian/IMG_0206.jpg',
            'https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg',
            'https://images.dog.ceo/breeds/cattledog-australian/IMG_1062.jpg',
            'https://images.dog.ceo/breeds/cattledog-australian/IMG_1211.jpg',
          ],
          status: 'success',
        })
      );
    }
  ),
  rest.get<DefaultRequestBody>(
    'https://dog.ceo/api/breed/cattledog/test/images',
    (_req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message: 'Breed not found (sub breed does not exist)',
          status: 'error',
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Dog Sub-Breed Images', () => {
  it('should render dog sub-breed images', async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: '/breeds/cattledog/australian' }]}
      >
        <DogSubBreedImages />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('image-grid-skeleton')
    );
    fireEvent.scroll(window);
    const list = screen.getByRole('list', {
      name: 'australian cattledog images',
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
  });

  it('should render error message when sub-breed does not exist', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/breeds/cattledog/test' }]}>
        <DogSubBreedImages />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('image-grid-skeleton')
    );
    const errorMessage = screen.getByText(
      'Breed not found (sub breed does not exist)'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
