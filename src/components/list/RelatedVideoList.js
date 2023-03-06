import React from 'react';
import RelatedVideo from './RelatedVideoListItem';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideoList = () => {
    return (
        <div>
            <div
                class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
            >
                {/* <!-- single related video --> */}
                <div class="w-full flex flex-row gap-2 mb-4">
                    <RelatedVideoListItem></RelatedVideoListItem>
                </div>
            </div>

        </div>
    );
};

export default RelatedVideoList;