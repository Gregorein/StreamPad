import { IconButton, Input } from "@mui/joy"
import { Search, X } from "lucide-react"
import { ReactNode } from "react"

type SearchInputProps = {
	value?: string
	placeholder?: string
	onChange: (value: string) => void
}

const SearchInput = ({ value = "", placeholder, onChange }: SearchInputProps): ReactNode => (
	<Input
		startDecorator={<Search />}
		endDecorator={
			value.length > 0 && (
				<IconButton variant="soft" color="danger" onClick={() => onChange("")}>
					<X size={20} />
				</IconButton>
			)
		}
		placeholder={placeholder}
		value={value}
		onChange={(e) => onChange(e.target.value)}
	/>
)

export default SearchInput
