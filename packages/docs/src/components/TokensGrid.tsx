import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  isFont?: boolean
}
export function TokensGrid({
  tokens,
  hasRemValue = false,
  isFont = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td style={isFont ? { fontFamily: value } : {}}>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
