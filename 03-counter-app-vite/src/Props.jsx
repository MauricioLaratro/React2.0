// Importamos la libreria PropTypes para validar las propiedades, asi evitamos errores y ademas es una buena practica
import PropTypes from 'prop-types';


export const Props = ({ title, subTitle, name }) => {
    return (
        <>
            <h1 data-testid='test-title'>
                { title }
            </h1>
            <p>
                { subTitle }
            </p>
            <p>
                { subTitle }
            </p>
            <p>
                { name }
            </p>
        </>
    )
}

// Validamos las props del componente prop de la siguiente manera. En donde la prop title estamos indicando que debe ser si o si un string y es requerido, es decir que en el caso que no se declado el string del title, devolvera un error en consola
Props.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string,
};

Props.defaultProps = {
    title: 'No se definio un titutlo',
    subTitle: 'No se definio un subtitulo',
    name: 'No se definio un nombre'
}