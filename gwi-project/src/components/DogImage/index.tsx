import { css, cx } from "@emotion/css"

export function DogImage(props: { image: string | undefined }) {
  return (
    <div className={styles.image}>
      {props.image ? (
        <img
          style={{ borderRadius: "10px" }}
          src={props.image}
          alt="random dog"
          width="400"
          height="310"
        />
      ) : (
        <div className={cx(styles.loaderImage, "skeleton", "header-img")} />
      )}
    </div>
  )
}

const styles = {
  image: css`
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px;
    object-fit: contain;
  `,

  loaderImage: css`
    display: flex;
    justify-content: center;
    align-items: center;
    &.skeleton {
      opacity: 0.7;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }

    &.header-img {
      width: 400px;
      height: 310px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }
  `,
}
