import * as React from 'react';
import { IconProps } from './types';

export const MedalCheckmark16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.99466 2.45819L4.25902 2.60428V2.60428L4.99466 2.45819ZM0.882884 2.06265L0.145276 2.19842L0.882884 2.06265ZM11.0054 2.45819L11.7411 2.60428V2.60428L11.0054 2.45819ZM15.1172 2.06265L15.8548 2.19842L15.1172 2.06265ZM6.82871 10.2967C6.53582 10.0038 6.06095 10.0038 5.76805 10.2967C5.47514 10.5896 5.47513 11.0645 5.76802 11.3574L6.82871 10.2967ZM7.24371 11.7724L6.71337 12.3028C6.85402 12.4434 7.04479 12.5224 7.24371 12.5224C7.44263 12.5224 7.6334 12.4434 7.77405 12.3028L7.24371 11.7724ZM10.2317 9.84501C10.5246 9.55211 10.5245 9.07723 10.2316 8.78435C9.93874 8.49146 9.46387 8.49147 9.17098 8.78438L10.2317 9.84501ZM6.49804 5.83636C7.07176 5.35331 7.0719 5.35347 7.07203 5.35363C7.07207 5.35368 7.07221 5.35384 7.07228 5.35393C7.07244 5.35412 7.07258 5.35429 7.07271 5.35444C7.07296 5.35474 7.07315 5.35496 7.07327 5.35511C7.07351 5.3554 7.0735 5.35539 7.07324 5.35507C7.07272 5.35444 7.0712 5.35259 7.06873 5.34954C7.0638 5.34345 7.05511 5.33258 7.04306 5.31705C7.01895 5.28597 6.98152 5.23633 6.93409 5.16913C6.83912 5.03458 6.70476 4.83056 6.55734 4.56491C6.26172 4.03223 5.91876 3.26117 5.73029 2.3121L4.25902 2.60428C4.48444 3.7394 4.89317 4.65742 5.24577 5.29278C5.42246 5.61116 5.58635 5.8609 5.70859 6.03409C5.76976 6.12077 5.82068 6.18851 5.85777 6.23634C5.87632 6.26026 5.89144 6.27922 5.90267 6.2931C5.90829 6.30004 5.91294 6.30572 5.91656 6.31011C5.91837 6.3123 5.91993 6.31418 5.92123 6.31573C5.92187 6.31651 5.92245 6.3172 5.92297 6.31782C5.92323 6.31812 5.92347 6.31841 5.92369 6.31868C5.9238 6.31881 5.92396 6.319 5.92402 6.31906C5.92417 6.31924 5.92431 6.31942 6.49804 5.83636ZM3.2377 0.118208H1.97516V1.61821H3.2377V0.118208ZM0.145276 2.19842C0.491477 4.07915 1.52101 5.45299 2.43598 6.34291C2.89519 6.78955 3.33332 7.12214 3.65886 7.34446C3.82199 7.45588 3.95791 7.54031 4.05545 7.59817C4.10426 7.62712 4.14356 7.64947 4.17198 7.66528C4.18619 7.67318 4.19769 7.67946 4.2063 7.6841C4.21061 7.68643 4.2142 7.68834 4.21704 7.68986C4.21846 7.69061 4.2197 7.69127 4.22075 7.69182C4.22128 7.6921 4.22175 7.69235 4.22219 7.69257C4.2224 7.69269 4.22269 7.69284 4.2228 7.69289C4.22307 7.69304 4.22333 7.69318 4.57118 7.02872C4.91903 6.36427 4.91927 6.36439 4.9195 6.36451C4.91956 6.36454 4.91978 6.36466 4.9199 6.36472C4.92015 6.36485 4.92035 6.36495 4.9205 6.36504C4.9208 6.3652 4.92093 6.36526 4.92087 6.36523C4.92076 6.36518 4.91994 6.36474 4.91842 6.36392C4.91538 6.36228 4.90956 6.35911 4.90113 6.35443C4.88428 6.34505 4.85702 6.32959 4.82067 6.30804C4.74791 6.26488 4.63915 6.19751 4.50481 6.10577C4.23541 5.92178 3.86739 5.64265 3.48181 5.26763C2.70721 4.51423 1.89259 3.40503 1.62049 1.92687L0.145276 2.19842ZM1.97516 0.118208C0.944498 0.118208 -0.0768328 0.991815 0.145276 2.19842L1.62049 1.92687C1.60744 1.85599 1.62537 1.79458 1.68057 1.73617C1.742 1.67118 1.84692 1.61821 1.97516 1.61821V0.118208ZM5.73029 2.31211C5.5062 1.18367 4.56312 0.118208 3.2377 0.118208V1.61821C3.6796 1.61821 4.13887 1.99925 4.25902 2.60428L5.73029 2.31211ZM9.50205 5.83636C10.0758 6.31942 10.0759 6.31924 10.0761 6.31906C10.0761 6.319 10.0763 6.31881 10.0764 6.31868C10.0766 6.31841 10.0769 6.31812 10.0771 6.31782C10.0776 6.3172 10.0782 6.31651 10.0789 6.31573C10.0802 6.31418 10.0817 6.3123 10.0835 6.31011C10.0872 6.30572 10.0918 6.30004 10.0974 6.2931C10.1087 6.27922 10.1238 6.26026 10.1423 6.23634C10.1794 6.18851 10.2303 6.12077 10.2915 6.03409C10.4137 5.8609 10.5776 5.61116 10.7543 5.29278C11.1069 4.65742 11.5156 3.7394 11.7411 2.60428L10.2698 2.3121C10.0813 3.26117 9.73837 4.03223 9.44275 4.56491C9.29533 4.83056 9.16097 5.03458 9.066 5.16913C9.01857 5.23633 8.98114 5.28597 8.95703 5.31705C8.94498 5.33258 8.93629 5.34345 8.93136 5.34954C8.92889 5.35259 8.92737 5.35444 8.92685 5.35507C8.92659 5.35539 8.92658 5.3554 8.92682 5.35511C8.92694 5.35496 8.92713 5.35474 8.92738 5.35444C8.92751 5.35429 8.92765 5.35412 8.92781 5.35393C8.92789 5.35384 8.92802 5.35368 8.92806 5.35363C8.92819 5.35347 8.92833 5.35331 9.50205 5.83636ZM12.7624 1.61821H14.0249V0.118208H12.7624V1.61821ZM14.3796 1.92687C14.1075 3.40503 13.2929 4.51423 12.5183 5.26763C12.1327 5.64265 11.7647 5.92178 11.4953 6.10577C11.3609 6.19751 11.2522 6.26488 11.1794 6.30804C11.1431 6.32959 11.1158 6.34505 11.099 6.35443C11.0905 6.35911 11.0847 6.36228 11.0817 6.36392C11.0802 6.36474 11.0793 6.36518 11.0792 6.36523C11.0792 6.36526 11.0793 6.3652 11.0796 6.36504C11.0797 6.36495 11.0799 6.36485 11.0802 6.36472C11.0803 6.36466 11.0805 6.36454 11.0806 6.36451C11.0808 6.36439 11.0811 6.36427 11.4289 7.02872C11.7768 7.69318 11.777 7.69304 11.7773 7.69289C11.7774 7.69284 11.7777 7.69269 11.7779 7.69257C11.7783 7.69235 11.7788 7.6921 11.7793 7.69182C11.7804 7.69127 11.7816 7.69061 11.783 7.68986C11.7859 7.68834 11.7895 7.68643 11.7938 7.6841C11.8024 7.67946 11.8139 7.67318 11.8281 7.66528C11.8565 7.64947 11.8958 7.62712 11.9446 7.59817C12.0422 7.54031 12.1781 7.45588 12.3412 7.34446C12.6668 7.12214 13.1049 6.78955 13.5641 6.34291C14.4791 5.45299 15.5086 4.07915 15.8548 2.19842L14.3796 1.92687ZM14.0249 1.61821C14.1532 1.61821 14.2581 1.67118 14.3195 1.73617C14.3747 1.79458 14.3926 1.85599 14.3796 1.92687L15.8548 2.19842C16.0769 0.991815 15.0556 0.118208 14.0249 0.118208V1.61821ZM11.7411 2.60428C11.8612 1.99925 12.3205 1.61821 12.7624 1.61821V0.118208C11.437 0.118208 10.4939 1.18367 10.2698 2.31211L11.7411 2.60428ZM5.76802 11.3574L6.71337 12.3028L7.77405 11.2421L6.82871 10.2967L5.76802 11.3574ZM7.77405 12.3028L10.2317 9.84501L9.17098 8.78438L6.71336 11.2421L7.77405 12.3028ZM12.0681 10.314C12.0681 12.5605 10.2469 14.3817 8.00032 14.3817V15.8817C11.0753 15.8817 13.5681 13.3889 13.5681 10.314H12.0681ZM8.00032 14.3817C5.75378 14.3817 3.9326 12.5605 3.9326 10.314H2.4326C2.4326 13.3889 4.92535 15.8817 8.00032 15.8817V14.3817ZM3.9326 10.314C3.9326 8.06741 5.75378 6.24622 8.00032 6.24622V4.74623C4.92535 4.74623 2.4326 7.23898 2.4326 10.314H3.9326ZM8.00032 6.24622C10.2469 6.24622 12.0681 8.06741 12.0681 10.314H13.5681C13.5681 7.23898 11.0753 4.74623 8.00032 4.74623V6.24622Z"
        fill={color}
      />
    </svg>
  );
};

export default MedalCheckmark16;
