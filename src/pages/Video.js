import React from 'react';
import Navbar from '../components/navBar/Navbar';
import Footer from '../components/Footer/Footer';
import Player from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideoList from '../components/list/RelatedVideoList';

const Video = () => {
    return (
        <div>

            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    <div class="grid grid-cols-3 gap-2 lg:gap-8">
                        <div class="col-span-full w-full space-y-8 lg:col-span-2">

                            <Player></Player>
                            {/* <!-- video description --> */}
                            <VideoDescription></VideoDescription>
                        </div>

                        {/* <!-- related videos --> */}
                        <RelatedVideoList></RelatedVideoList>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Video;