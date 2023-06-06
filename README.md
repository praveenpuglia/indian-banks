# Indian Banks 
Structured, centralized data, including logos for all the Indian Banks, collected from official sources.

## Sponsorship & Contribution
If you or your organization uses this repository for bank related data, please consider sponsoring me. It has taken me hours of work to get high quality vectors right and source data from multiple places after a lot of manual verification. 

As you can imagine, this is a time consuming effort and it would be amazing if you can [contribute](./CONTRIBUTING.md) to this repository.

## Current Status
- [ ] Vector Logos - In Progress
- [ ] Figuring out the base data structure - In Progress
  - Name
  - Logo
  - Symbol / Small Logo
  - Short Code
  - IFSC Prefix
  - Balance Check USSD Code
  - Website
  - Type : https://www.rbi.org.in/scripts/banklinks.aspx
- [ ] How to scrape names & other details from official websites.

## Optimizing & Converting
```sh
# Optimize SVGs to be the smallest size they can be
brew install svgo
./optimize.sh
```

```sh
# Convert each SVG to PNG for use in cases where SVG isn't supported
brew install inkscape
./convert.sh
```


