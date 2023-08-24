const unicef = require('../assets/unicef.png');
const givewell = require('../assets/givewell.png');
const sicklecell = require('../assets/sicklecell.png');
const {CharityCard} = require("./CharityCard");

export const Donate = () => {
    let charities = [
        {
            name: 'UNICEF',
            logo: unicef
        },
        {
            name: 'GiveWell',
            logo: givewell
        },
        {
            name: 'Sickle Cell Foundation',
            logo: sicklecell
        },
    ];
    return (
        <div className="my-32 flex flex-col gap-y-8 items-center">
            <h2 className="text-3xl font font-extrabold text-center">Donate</h2>
            <p className="text-center font">Choose an organization to donate!</p>
            <div className='flex flex-row items-center justify-between w-7/12'>
                {charities.map((charity, index) => {
                    return <CharityCard key={index} name={charity.name} logo={charity.logo} />
                })}
            </div>
        </div>
    );
}