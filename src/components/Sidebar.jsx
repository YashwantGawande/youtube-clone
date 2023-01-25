import { Category } from "@mui/icons-material"
import { Stack } from "@mui/system"
import { categories } from '../utils'

const selectedCategory = 'New'

const Sidebar = () => {
    return (
        <Stack direction="row"
            sx={{
                overflow: "auto", height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}>
            {categories.map((category) => (
                <button
                    className="category-btn"
                    style={{
                        background: category.name === selectedCategory && '#fc1503',
                        color: "white"
                    }}
                    key={category.name}>
                    <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar