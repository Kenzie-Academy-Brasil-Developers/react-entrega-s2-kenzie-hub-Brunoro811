import { SelectInput } from "./style";
function Select({ status, register = () => "", onChange, ...rest }) {
  return (
    <SelectInput value={status} onChange={onChange} {...register("status")}>
      <option value="Iniciante">Iniciante</option>
      <option value="Intermédiario">Intermédiario</option>
      <option value="Avançado">Avançado</option>
    </SelectInput>
  );
}
export default Select;
