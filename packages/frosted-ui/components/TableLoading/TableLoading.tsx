import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

export const TableLoading = () => {
  return (
    <div className="flex h-[288px] items-center justify-center">
      <Icon className="fa-spin absolute z-20 h-5 w-5" icon={faSpinner} />
    </div>
  );
};
