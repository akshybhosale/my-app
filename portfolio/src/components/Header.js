import PropTypes from 'prop-types';
function Header({name, age}) {
    Header.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      };
    return( 
        <div>
        <header>
            <h1>This is a Header function {name}</h1>
            <h1>This is a Header function{age}</h1>
        </header>
        <hr />
        </div>
    );
}export default Header;