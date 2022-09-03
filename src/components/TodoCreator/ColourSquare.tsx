import styles from '../../styles/todoCreatorStyles.module.scss';

type ColourSquareProps = {
  colour: string;
};

function ColourSquare(props: ColourSquareProps) {
  const { colour } = props;
  return <div className={`${styles.colourSquare}`} style={{ background: `${colour}` }}></div>;
}

export default ColourSquare;
