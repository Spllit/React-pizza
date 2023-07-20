import { Pagination} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageIndex} from '../../redux/slices/filterSlice';

export default function Paginate(){
    const dispatch = useDispatch()
    const { currentPageIndex, itemsQty } = useSelector((state) => state.filter);

    const handleClick = (e) => {
        window.scrollTo(0, 0);
		dispatch(setCurrentPageIndex(+e.target.innerText));
    }

    return(
		<>
			{
				(itemsQty && itemsQty > 6) ?
					<Pagination
					count = {Math.ceil(itemsQty / 6)}
					page = {+currentPageIndex}
					onChange={handleClick}
					size="large"
					color="primary"
					></Pagination>
					: null
			}
		</>
    )
}