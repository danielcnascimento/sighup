import MaskedInput from 'react-text-mask';
import { TextMaskCustomProps } from "./text-masker.component.type";

//TODO: Deixar masket mais dinâmico para atender mais cenários após release.
function UAUTextMaskCustomComponent(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export { UAUTextMaskCustomComponent }
