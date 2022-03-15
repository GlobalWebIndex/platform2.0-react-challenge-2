import { css } from "@emotion/css"
import { capitalizeFirstLetter } from "../../Utils/stringUtils"

export function Dropdown(props: any) {
  return (
    <div className={styles.overview}>
      <div className={styles.container}>
        <div className={styles.scrollbar}>
          {props.allBreeds.map((breed: string) => (
            <div
              onClick={() => props.setBreed(breed)}
              key={breed}
              className={styles.productContainer}
            >
              {capitalizeFirstLetter(breed)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  overview: css`
    position: absolute;
    right: 0;
    max-height: 100%;
    transform: translateY(20px);
    z-index: 10000;
    cursor: default;
  `,
  container: css`
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    border: 2px solid var(--lightgray);
    background-color: var(--white);
    max-height: 500px;
    overflow: hidden;
    padding: 10px;
  `,
  productContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 26px;
    border: 2px solid var(--lightgray);
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;

    :hover {
      font-weight: bold;
      border: 2px solid var(--gray);
    }
  `,
  scrollbar: css`
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
    ::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: var(--tooltip-track);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--lightgray);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--gray);
      border-radius: 10px;
    }
  `,

  empty: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
}
