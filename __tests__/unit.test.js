// unit.test.js

import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
  } from '../code-to-unit-test/unit-test-me';
  
  // Tests for isPhoneNumber
  describe('isPhoneNumber', () => {
    test('Valid phone number with area code', () => {
      expect(isPhoneNumber("(123) 456-7890")).toBe(true);
    });
  
    test('Valid phone number', () => {
      expect(isPhoneNumber("123-456-7890")).toBe(true);
    });
  
    test('Invalid phone number, short number', () => {
      expect(isPhoneNumber("123-45-6789")).toBe(false);
    });
  
    test('Invalid phone number, missing part of area code', () => {
      expect(isPhoneNumber("(123)456-789")).toBe(false);
    });
  });
  
  // Tests for isEmail
  describe('isEmail', () => {
    test('Valid email', () => {
      expect(isEmail("test@example.com")).toBe(true);
    });
  
    test('Valid email with domain code', () => {
      expect(isEmail("hello@domain.co")).toBe(true);
    });
  
    test('Invalid email with double "@"', () => {
      expect(isEmail("user@@domain.com")).toBe(false);
    });
  
    test('Invalid email with incomplete domain', () => {
      expect(isEmail("user@domaincom")).toBe(false);
    });
  });
  
  // Tests for isStrongPassword
  describe('isStrongPassword', () => {
    test('Valid strong password starting with a letter', () => {
      expect(isStrongPassword("Pass123")).toBe(true);
    });
  
    test('Valid strong password with underscore', () => {
      expect(isStrongPassword("A1_b")).toBe(true);
    });
  
    test('Invalid strong password with special character', () => {
      expect(isStrongPassword("1abc!")).toBe(false);
    });
  
    test('Invalid strong password, too short', () => {
      expect(isStrongPassword("ab")).toBe(false);
    });
  });
  
  // Tests for isDate
  describe('isDate', () => {
    test('Valid date in US format', () => {
      expect(isDate("12/31/2020")).toBe(true);
    });
  
    test('Valid date, single digit month and day', () => {
      expect(isDate("1/1/2023")).toBe(true);
    });
  
    test('Invalid date, impossible month', () => {
      expect(isDate("111/30/2023")).toBe(false);
    });
  
    test('Invalid day', () => {
      expect(isDate("10/111/2022")).toBe(false);
    });
  });
  
  // Tests for isHexColor
  describe('isHexColor', () => {
    test('Valid hex color, 6 characters', () => {
      expect(isHexColor("#1a2b3c")).toBe(true);
    });
  
    test('Valid hex color, 3 characters', () => {
      expect(isHexColor("#FFF")).toBe(true);
    });
  
    test('Invalid hex color, non-hex characters', () => {
      expect(isHexColor("#1a2g3c")).toBe(false);
    });
  
    test('Invalid hex color, too many #', () => {
      expect(isHexColor("####123456")).toBe(false);
    });
  });
  