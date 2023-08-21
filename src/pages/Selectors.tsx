import { useState } from "react";
import Select from "../features/Select/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
  { label: "Sixth", value: 6 },
  { label: "Seventh", value: 7 },
  { label: "Eight", value: 8 },
];

type SelectOption = {
  label: string;
  value: string | number;
};

function App() {
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);
  return (
    <div>
      <Select
        multiple
        value={value2}
        onChange={(o) => setValue2(o)}
        options={options}
      />
      <br />
      <Select
        value={value1}
        onChange={(o) => {
          setValue1(o);
        }}
        options={options}
      />
    </div>
  );
}

export default App;
