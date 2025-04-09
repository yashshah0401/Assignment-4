# Assignment 4 – Paint Area Calculator

## Course
**SENG8120 - Modern Automated Testing** Conestoga College — Winter 2025

## Overview
This project will solves a problem involving a modernistic painting made up of:
- A rectangle
- Three triangles at the bottom (each triangle has a base = 1/3 of the rectangle’s width)

The goal is to calculate how much paint is required for a given number of artwork copies.

## Logic Used

For a single painting:
- **Rectangle area** = `width × height`
- **Each triangle area** = `0.5 × (width / 3) × height`
- **Total per painting** = `rectangle area + 3 × triangle area`
- **Total paint needed** = `total per painting × number of copies`

## Tech Stack
- **TypeScript**
- **Jest** for Unit Testing
- **TDD** (Test-Driven Development)
- Modular architecture (`src/paintCalculator`)

## Example

For 1 copy of a 3m x 2m painting:
- Rectangle = `3 × 2 = 6`
- Triangle = `0.5 × 1 × 2 = 1`
- Total = `6 + 3 × 1 = 9 m²`

```ts
calculatePaintNeeded(3, 2, 1); // 9
calculatePaintNeeded(3, 2, 5000); // 45000
