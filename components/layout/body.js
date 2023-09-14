import React from 'react'
import styles from '@/styles/ubike.module.css'
import Image from 'next/image'
export default function Body() {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.bodyTitle}>站點資訊</div>
        <div className={styles.searchPart}>
          <div>
            <label htmlFor="dropdown">123</label>
            <select
              id="dropdown"
              //   value={this.state.selectedOption}
              //   onChange={this.handleSelectChange}
            >
              <option value="">請選擇</option>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
            </select>
          </div>
          <div>搜尋欄</div>
        </div>
      </div>
    </>
  )
}
