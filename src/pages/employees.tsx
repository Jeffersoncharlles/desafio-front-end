import { formatDay } from "../utils/format-day";
import { formatNumberPhone } from "../utils/format-number-phone";

const Employees = () => {
  return (
    <div>
      <p>{formatDay("2019-12-02T00:00:00.000Z")}</p>
      <span>{formatNumberPhone("5551234567890")}</span>
    </div>
  );
};
export default Employees;
