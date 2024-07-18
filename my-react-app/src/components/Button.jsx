// import styles from './button.module.css'        //required for the module based css


function Button(){

    const styles ={
        padding: '20px',
        backgroundColor: 'aquamarine',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '10px'
    }


    return(
        <button style={styles}>
            Click Me
        </button>
    )
}

export default Button