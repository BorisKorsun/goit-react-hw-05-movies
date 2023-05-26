export default function RejectedView({ error }) {
    return (
        <>
        <h3>Oops, something went wrong, try reload the page</h3>
        <p>{error}</p>
        </>
    );
};