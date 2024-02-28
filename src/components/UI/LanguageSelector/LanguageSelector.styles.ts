import styled, { css } from 'styled-components';
import { LanguageSelectorProps } from './LanguageSelector';

export const Container = styled.div<LanguageSelectorProps>`
  position: relative;

  .dropdown-btn {
    all: unset;
    cursor: pointer;
  }

  ${props =>
    props.size === 'lg' &&
    css`
      .dropdown-btn img {
        width: 36px;
        height: 36px;
      }

      .dropdown-content:after {
        ${props.openDirection}: 75px;
      }

      .dropdown-content {
        ${props.openDirection === 'left' ? 'right' : 'left'}: 0;
        top: 46px;
        min-width: 100px;
      }
    `}

  ${props =>
    props.size === 'md' &&
    css`
      .dropdown-btn img {
        width: 28px;
        height: 28px;
      }

      .dropdown-content:after {
        ${props.openDirection}: 80px;
      }

      .dropdown-content {
        ${props.openDirection === 'left' ? 'right' : 'left'}: 0;
        top: 38px;
        min-width: 100px;
      }
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      .dropdown-btn img {
        width: 20px;
        height: 20px;
      }

      .dropdown-content:after {
        ${props.openDirection}: 85px;
      }

      .dropdown-content {
        ${props.openDirection === 'left' ? 'right' : 'left'}: 0;
        top: 30px;
        min-width: 100px;
      }
    `}

  .dropdown-btn img {
    display: inline-block;
    border-radius: 50%;
    object-fit: cover;
    transition: box-shadow 0.3s ease;
  }

  .dropdown-btn img:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  .dropdown-content {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-20px);
    transition: 0.25s linear;
    border: 1px solid #dedede;
    position: absolute;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 0;
    transform: translateY(-5px);
    z-index: 999;
  }

  .dropdown-content:after {
    content: '';
    position: absolute;
    top: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
  }

  .dropdown-content.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  .dropdown-options button {
    all: unset;
  }

  .dropdown-options ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: block;
  }

  .dropdown-options ul li {
    padding: 10px 16px;
    border-bottom: 1px solid #e9edff;
    font-size: 14px;
    cursor: pointer;
  }

  .dropdown-options ul li:last-child {
    border: none;
  }
`;
