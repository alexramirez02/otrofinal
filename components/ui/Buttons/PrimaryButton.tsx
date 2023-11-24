import { ButtonProps } from "./types";
// eslint-disable-next-line no-restricted-imports
import { Spinner } from "../Spinners";



const PrimaryButton = ({ loading, text,onClick, type = 'button',}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className='primary'
    >
      {loading ? <Spinner /> : <span>{text}</span>}
    </button>
  );
};

export { PrimaryButton };
