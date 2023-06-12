import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import ChangeNumberPage from './ChangeNumberPage';
import { PageProductsProps } from '@/types/product';

const PageNumber: FunctionComponent<PageProductsProps> = ({ searchParams }) => {
    console.log(searchParams);

    const { pageNumber, ...other } = searchParams;

    return (
        <div className="flex items-center justify-between self-center w-[60%]">
            <ChangeNumberPage
                pageNumber={parseInt(pageNumber) > 1 ? parseInt(pageNumber) - 1 : 1}
                limit={8}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </ChangeNumberPage>
            <ChangeNumberPage pageNumber={1} limit={8} isActive>
                1
            </ChangeNumberPage>
            <ChangeNumberPage pageNumber={2} limit={8}>
                2
            </ChangeNumberPage>
            <ChangeNumberPage pageNumber={3} limit={8}>
                3
            </ChangeNumberPage>
            <ChangeNumberPage pageNumber={4} limit={8}>
                4
            </ChangeNumberPage>
            <ChangeNumberPage isDisable>...</ChangeNumberPage>
            <ChangeNumberPage pageNumber={parseInt(pageNumber) + 1} limit={8}>
                <FontAwesomeIcon icon={faAngleRight} />
            </ChangeNumberPage>
        </div>
    );
};

export default PageNumber;
