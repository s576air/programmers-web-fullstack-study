import {render, screen} from '@testing-library/react'
import { BookStoreThemeProvider } from '../../context/themeContext'
import InputText from './InputText'
import React from 'react'
import { describe, expect, it } from 'vitest'

describe("InputText 컴포넌트 테스트", () => {
    it('렌더를 확인', () => {
        render(
            <BookStoreThemeProvider>
                <InputText placeholder='여기에 입력' />
            </BookStoreThemeProvider>
        )
        expect(screen.getByPlaceholderText('여기에 입력')).toBeInTheDocument()
    })
    it('forwartRef 테스트', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <BookStoreThemeProvider>
                <InputText placeholder='여기에 입력' ref={ref} />
            </BookStoreThemeProvider>
        )
        expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })

})