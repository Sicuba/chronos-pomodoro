import styles from './Heading.module.css';

export function Heading({children, vars, color} : {children:React.ReactNode, vars:number, color:string}){
    return(
        <>
        <h1 className={`${styles.cyan}`}>{children}</h1>
        <h1>Cor: {color}</h1>
        <h1>Var: {vars}</h1>
        </>
    )
}