import { DateTimeWidget } from '../../widgets';
import { Navbar } from '../Navbar/Navbar';

export const HomeNav = (): JSX.Element => {
  return (
    <Navbar>
      <span>Staffboard v0.1</span>
      <DateTimeWidget />
    </Navbar>
  );
};
