import Notes from './Notes';

export const Home = (props) => {
    const { showAlert } = props
    return (
        <div id='home'>
            <Notes showAlert={showAlert} />
        </div>
    )
}
