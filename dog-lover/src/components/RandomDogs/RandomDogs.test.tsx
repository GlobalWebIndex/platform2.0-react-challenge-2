import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '../../test-utils';
import { setupServer } from 'msw/node';
import { DefaultRequestBody, rest } from 'msw';
import { RandomDogs } from './';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get<DefaultRequestBody>(
    'https://dog.ceo/api/breeds/image/random/12',
    (_req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message: [
            'https://images.dog.ceo/breeds/sheepdog-english/n02105641_8610.jpg',
            'https://images.dog.ceo/breeds/pyrenees/n02111500_855.jpg',
            'https://images.dog.ceo/breeds/mix/Denver.jpg',
            'https://images.dog.ceo/breeds/hound-english/n02089973_3040.jpg',
            'https://images.dog.ceo/breeds/poodle-toy/n02113624_876.jpg',
            'https://images.dog.ceo/breeds/terrier-scottish/n02097298_3611.jpg',
            'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_854.jpg',
            'https://images.dog.ceo/breeds/cockapoo/george-tongue.jpeg',
            'https://images.dog.ceo/breeds/terrier-irish/n02093991_727.jpg',
            'https://images.dog.ceo/breeds/terrier-dandie/n02096437_4435.jpg',
            'https://images.dog.ceo/breeds/mix/Annabelle2.jpeg',
            'https://images.dog.ceo/breeds/groenendael/n02105056_6639.jpg',
          ],
          status: 'success',
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Dog Breed Images', () => {
  it('should render 12 random dog images', async () => {
    render(
      <MemoryRouter>
        <RandomDogs />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('image-grid-skeleton')
    );
    const list = screen.getByRole('list', { name: 'Random Dogs' });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(12);
  });
});
