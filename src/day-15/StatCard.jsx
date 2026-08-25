function StatCard({ label, value, children }) {
    return (
        <div style={{ border: '1px solid gray', padding: '15px' }}>
            <p>{label}</p>
            <h2>{value}</h2>
            {children}
        </div>
    )
}

export default StatCard;