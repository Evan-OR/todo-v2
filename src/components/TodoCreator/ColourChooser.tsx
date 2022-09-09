import { Colours } from '../../utils';
import ColourSquare from './ColourSquare';
import styles from '../../styles/todoCreatorStyles.module.scss';

type ColourChooserProps = {
  handleColour: (id: string) => void;
  selectedColour: string;
};

function ColourChooser(props: ColourChooserProps) {
  const { handleColour, selectedColour } = props;

  return (
    <div className={styles.colourSquareWrapper}>
      {Colours.map((el) => (
        <ColourSquare key={el} colour={el} handleColour={handleColour} selectedColour={selectedColour} />
      ))}
    </div>
  );
}

export default ColourChooser;
