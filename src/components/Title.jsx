import '../stylesheets/Title.css';

function Title({title}) {
    return(
        <div className="wrapper">
            <div className="bg">{title}</div>
            <div className="fg">{title}</div>
        </div>
    );
}

export default Title;