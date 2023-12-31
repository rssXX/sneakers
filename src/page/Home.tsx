import React, {useEffect} from 'react'
import BlockSneakers from "../components/BlockSneakers/BlockSneakers.tsx";
import {fetchSneaker} from "../redux/sneakers/asyncActions.ts";
import {useAppDispatch} from "../redux/store.ts";
import {useSelector} from "react-redux";
import {selectFilter} from "../redux/filter/selector.ts";
import type { PaginationProps } from 'antd';
import {setPage} from "../redux/filter/slice.ts";
import BlockCarousel from "../components/Carousel/BlockCarousel.tsx";

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { page, search} = useSelector(selectFilter);

    const getSneakers = async () => {
        dispatch(fetchSneaker({ page, search }))
    }

    useEffect(() => {
        getSneakers()
    }, [page, search])

    const onChange: PaginationProps['onChange'] = (page) => {
        dispatch(setPage(page))
    };

    return (
        <div>
            <BlockCarousel/>
            <BlockSneakers page={page} onChangePagination={onChange} />
        </div>
    )
}

export default Home