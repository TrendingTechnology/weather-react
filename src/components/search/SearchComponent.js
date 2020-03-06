import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import {PropTypes} from 'prop-types'

const SearchComponent = props => {
  const {theme, colorTheme} = useContext(ThemeContext)
  return (
    <div className='h-12 mx-5 mt-5'>
      <div className='relative'>
        <div className='absolute top-0 left-0 ml-4 mt-3'>
          <img
            src='./city-weather-search.svg'
            alt='city search'
            className='h-6 object-contain object-center'
          />
        </div>
        <input
          style={{
            backgroundColor: `${theme === 'dark' ? '#3a3a3a' : '#e2e8f0'}`,
            letterSpacing: '0.05em'
          }}
          className={`block appearance-none w-full border-none rounded-full shadow py-3 pl-12 pr-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 truncate text-${colorTheme}`}
          id='grid-first-name'
          type='text'
          placeholder='Type city name to find weather forecast'
          onChange={props.citySearch}
          value={props.city}
        />
        {props.showCaret && props.city.trim() ? (
          <div
            className='flex right-0 absolute top-0 mr-4 mt-4 cursor-pointer'
            onClick={props.caretClicked}>
            {props.showAddresses ? (
              <img
                src='./up-arrow.svg'
                alt='arrow-up'
                className='h-4 object-contain object-center'
              />
            ) : (
              <img
                src='./down-arrow.svg'
                alt='arrow-down'
                className='h-4 object-contain object-center'
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SearchComponent

SearchComponent.propTypes = {
  city: PropTypes.string,
  cityName: PropTypes.string,
  showCaret: PropTypes.bool,
  showAddresses: PropTypes.bool,
  caretClicked: PropTypes.func
}