const Menu = () => {
    return (
        <div className="flex-centered menu-section">
            <section className="flex-centered column menu" style={{ padding: '14vh 0', margin: '16vh 0' }}>
                <div style={{ zIndex: '1' }} >
                    <div className="flex-centered column">
                        <div className="title" style={{ fontSize: '28px' }}>We have an exciting menu!</div>
                        <div className="sub-title mt-sm" style={{ fontWeight: '300', fontSize: '17px' }}>Life's too short for boring food. Take a look at our exciting menu. </div>
                        <button className="btn primary mt-lg">VIEW MENU</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Menu;