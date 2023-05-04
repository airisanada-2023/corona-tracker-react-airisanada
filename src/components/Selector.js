const Selector = ({setCountry, countriesJson}) => {

    return (
        <div className="selector-container">
            <select onChange={(e) => setCountry(e.target.value)}>
                {countriesJson.map((country, index) =>
                    <option key={index} value={country.Slug}>{country.Country}</option>
                    // value=送信されるデータ。ない場合はoptionタグ内のテキストが値として送られる
                )}
            </select>
        </div>
    );
};

export default Selector;