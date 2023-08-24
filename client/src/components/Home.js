const {HomeLeft} = require('./HomeLeft');
const {HomeRight} = require('./HomeRight');

export const Home = () => {
    return(
        <div className="flex flex-row ">
            <HomeLeft />
            <HomeRight />
        </div>
    )
}