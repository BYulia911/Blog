import classes from "./NoteContainer.module.css"

export default function NoteContainer({name, image}) {
    return (
        <div className={classes.containerNote}>
            <img className={classes.img} src={image}/>
            <p className={classes.p}>{name}</p>
        </div>
    )
}