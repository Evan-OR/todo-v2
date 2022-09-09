import styles from '../../styles/todoCreatorStyles.module.scss';

type ColourSquareProps = {
  colour: string;
  handleColour: (id: string) => void;
  selectedColour: string;
};

function ColourSquare(props: ColourSquareProps) {
  const { colour, handleColour, selectedColour } = props;
  const active: boolean = selectedColour === colour ? true : false;

  return (
    <div
      onClick={() => handleColour(colour)}
      className={`${styles.colourSquare} ${active ? styles.selected : ''}`}
      style={{ background: `${colour}` }}
    >
      {active ? <div>✓</div> : <></>}
    </div>
  );
}

export default ColourSquare;
