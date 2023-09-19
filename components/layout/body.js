import React from 'react'
import styles from '@/styles/ubike.module.css'
import { styled, alpha } from '@mui/material/styles'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Select from '@mui/material/Select'
export default function Body() {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    marginLeft: 0,
    width: 277,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }))

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.bodyTitle}>站點資訊</div>
        <div className={styles.searchPart}>
          {/* 搜尋區域下拉式選單 */}
          <Box
            sx={{
              outline: 'none', // 取消外框
              border: 0, // 取消邊框
              '&:focus': {
                outline: 'none', // 取消Focus時的藍色樣式
              },
            }}
          >
            <FormControl>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{
                  width: 175,
                  height: 40,
                  backgroundColor: '#F6F6F6',
                  fontFamily: 'Noto Sans TC, sans-serif',
                  fontSize: '18px',
                  fontWeight: '500',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: 'none',

                  // 強制取消邊框顏色
                  '.MuiOutlinedInput-notchedOutline': { border: 0 },

                  // 強制取消focus邊框顏色
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    opacity: 0, //讓邊框變透明
                    borderRadius: '8px',
                  },
                }}
              >
                <MenuItem value="">請選擇站點</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
        </div>
      </div>
    </>
  )
}
