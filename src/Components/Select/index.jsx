import { SelectInput } from "./style";
function Select({ register }) {
  return (
    <SelectInput {...register("status")}>
      <option value="Iniciante">Iniciante</option>
      <option value="Intermédiario">Intermédiario</option>
      <option value="Avançado">Avançado</option>
    </SelectInput>
  );
}
export default Select;
