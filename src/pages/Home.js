import React from 'react';
import Tags from '../components/tags/Tags';
import VIdeoGrid from '../components/grid/VIdeoGrid';
import Pagination from '../components/ui/Pagination';


const Home = () => {
    return (
        <div>

            <Tags></Tags>
            <VIdeoGrid></VIdeoGrid>
            <Pagination></Pagination>

        </div>
    );
};

export default Home;