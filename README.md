# Indian Banks

Structured, centralized data, including logos for all the Indian Banks & Foreign Banks operating in India, collected from official sources.

## Using the logos

Every bank has a folder named after its **slug**, which is the lowercase IFSC prefix (`HDFC0000001` → `hdfc`). Find yours in the [table below](#bank-slugs), then point at the files directly over jsDelivr:

```
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/logo.svg
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/symbol.svg
```

Need a raster image (emails, native apps, places that don't take SVG)? Swap the extension. PNGs are rendered at the SVG's intrinsic size:

```
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/logo.png
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/symbol.png
```

```html
<img src="https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/hdfc/logo.svg" alt="HDFC Bank" height="32" />
```

Each folder has a `logo` (full wordmark) and a `symbol` (square mark). A few banks have only one of the two, or a PNG with no SVG; the table below shows exactly what exists. The slug → bank name map is at [`data/banks.json`](https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/data/banks.json), and the bank type for each slug is in [`data/types.json`](https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/data/types.json).

## Sponsorship & Contribution

If you or your organization uses this repository for bank related data, please consider sponsoring me. It has taken me hours of work to get high quality vectors right and source data from multiple places after a lot of manual verification.

As you can imagine, this is a time consuming effort and it would be amazing if you can [contribute](./CONTRIBUTING.md) to this repository.

## Bank Slugs

Click a logo to open the source file. The previews sit on white cards so they stay readable in dark mode; the files themselves have transparent backgrounds. Banks still missing are tracked in [logos-progress.md](./logos-progress.md).

This table is auto-generated from [data/banks.json](./data/banks.json) and the contents of [assets/logos/](./assets/logos/) on every commit that touches either. To regenerate manually, run `pnpm run generate:readme`.

<!-- BANKS_TABLE_START -->
[Private Sector Banks](#private-sector-banks) (21) · [Small Finance Banks](#small-finance-banks) (11) · [Payments Banks](#payments-banks) (5) · [Public Sector Banks](#public-sector-banks) (12) · [Foreign Banks](#foreign-banks) (38)

### Private Sector Banks

| Bank Name | Slug | Logo | Symbol |
| --- | --- | --- | --- |
| [Axis Bank](./assets/logos/utib/) | `utib` | <a href="./assets/logos/utib/logo.svg"><img src="./assets/previews/utib-logo.png" width="163" alt="utib logo" /></a> | <a href="./assets/logos/utib/symbol.svg"><img src="./assets/previews/utib-symbol.png" width="48" alt="utib symbol" /></a> |
| [Bandhan Bank](./assets/logos/bdbl/) | `bdbl` | <a href="./assets/logos/bdbl/logo.svg"><img src="./assets/previews/bdbl-logo.png" width="209" alt="bdbl logo" /></a> | <a href="./assets/logos/bdbl/symbol.svg"><img src="./assets/previews/bdbl-symbol.png" width="48" alt="bdbl symbol" /></a> |
| [City Union Bank](./assets/logos/ciub/) | `ciub` | <a href="./assets/logos/ciub/logo.svg"><img src="./assets/previews/ciub-logo.png" width="198" alt="ciub logo" /></a> | <a href="./assets/logos/ciub/symbol.svg"><img src="./assets/previews/ciub-symbol.png" width="48" alt="ciub symbol" /></a> |
| [CSB Bank Limited](./assets/logos/csbk/) | `csbk` | <a href="./assets/logos/csbk/logo.svg"><img src="./assets/previews/csbk-logo.png" width="216" alt="csbk logo" /></a> | <a href="./assets/logos/csbk/symbol.svg"><img src="./assets/previews/csbk-symbol.png" width="48" alt="csbk symbol" /></a> |
| [DCB Bank Limited](./assets/logos/dcbl/) | `dcbl` | <a href="./assets/logos/dcbl/logo.svg"><img src="./assets/previews/dcbl-logo.png" width="179.5" alt="dcbl logo" /></a> | <a href="./assets/logos/dcbl/symbol.svg"><img src="./assets/previews/dcbl-symbol.png" width="48" alt="dcbl symbol" /></a> |
| [Dhanalakshmi Bank](./assets/logos/dlxb/) | `dlxb` | <a href="./assets/logos/dlxb/logo.svg"><img src="./assets/previews/dlxb-logo.png" width="186.5" alt="dlxb logo" /></a> | <a href="./assets/logos/dlxb/symbol.svg"><img src="./assets/previews/dlxb-symbol.png" width="29" alt="dlxb symbol" /></a> |
| [Federal Bank](./assets/logos/fdrl/) | `fdrl` | <a href="./assets/logos/fdrl/logo.svg"><img src="./assets/previews/fdrl-logo.png" width="145.5" alt="fdrl logo" /></a> | <a href="./assets/logos/fdrl/symbol.svg"><img src="./assets/previews/fdrl-symbol.png" width="48" alt="fdrl symbol" /></a> |
| [HDFC Bank](./assets/logos/hdfc/) | `hdfc` | <a href="./assets/logos/hdfc/logo.svg"><img src="./assets/previews/hdfc-logo.png" width="216" alt="hdfc logo" /></a> | <a href="./assets/logos/hdfc/symbol.svg"><img src="./assets/previews/hdfc-symbol.png" width="48" alt="hdfc symbol" /></a> |
| [ICICI Bank Limited](./assets/logos/icic/) | `icic` | <a href="./assets/logos/icic/logo.svg"><img src="./assets/previews/icic-logo.png" width="215" alt="icic logo" /></a> | <a href="./assets/logos/icic/symbol.svg"><img src="./assets/previews/icic-symbol.png" width="45.5" alt="icic symbol" /></a> |
| [IDBI Bank](./assets/logos/ibkl/) | `ibkl` | <a href="./assets/logos/ibkl/logo.svg"><img src="./assets/previews/ibkl-logo.png" width="209" alt="ibkl logo" /></a> | <a href="./assets/logos/ibkl/symbol.svg"><img src="./assets/previews/ibkl-symbol.png" width="48" alt="ibkl symbol" /></a> |
| [IDFC First Bank Limited](./assets/logos/idfb/) | `idfb` | <a href="./assets/logos/idfb/logo.svg"><img src="./assets/previews/idfb-logo.png" width="129" alt="idfb logo" /></a> | <a href="./assets/logos/idfb/symbol.svg"><img src="./assets/previews/idfb-symbol.png" width="48" alt="idfb symbol" /></a> |
| [IndusInd Bank](./assets/logos/indb/) | `indb` | <a href="./assets/logos/indb/logo.svg"><img src="./assets/previews/indb-logo.png" width="216" alt="indb logo" /></a> | <a href="./assets/logos/indb/symbol.svg"><img src="./assets/previews/indb-symbol.png" width="48" alt="indb symbol" /></a> |
| [Jammu and Kashmir Bank](./assets/logos/jaka/) | `jaka` | <a href="./assets/logos/jaka/logo.svg"><img src="./assets/previews/jaka-logo.png" width="145" alt="jaka logo" /></a> | <a href="./assets/logos/jaka/symbol.svg"><img src="./assets/previews/jaka-symbol.png" width="48" alt="jaka symbol" /></a> |
| [Karnataka Bank Limited](./assets/logos/karb/) | `karb` | <a href="./assets/logos/karb/logo.svg"><img src="./assets/previews/karb-logo.png" width="216" alt="karb logo" /></a> | <a href="./assets/logos/karb/symbol.svg"><img src="./assets/previews/karb-symbol.png" width="45.5" alt="karb symbol" /></a> |
| [Karur Vysya Bank](./assets/logos/kvbl/) | `kvbl` | <a href="./assets/logos/kvbl/logo.svg"><img src="./assets/previews/kvbl-logo.png" width="145" alt="kvbl logo" /></a> | <a href="./assets/logos/kvbl/symbol.svg"><img src="./assets/previews/kvbl-symbol.png" width="48" alt="kvbl symbol" /></a> |
| [Kotak Mahindra Bank Limited](./assets/logos/kkbk/) | `kkbk` | <a href="./assets/logos/kkbk/logo.svg"><img src="./assets/previews/kkbk-logo.png" width="149.5" alt="kkbk logo" /></a> | <a href="./assets/logos/kkbk/symbol.svg"><img src="./assets/previews/kkbk-symbol.png" width="48" alt="kkbk symbol" /></a> |
| [RBL Bank Limited](./assets/logos/ratn/) | `ratn` | <a href="./assets/logos/ratn/logo.svg"><img src="./assets/previews/ratn-logo.png" width="148" alt="ratn logo" /></a> | <a href="./assets/logos/ratn/symbol.svg"><img src="./assets/previews/ratn-symbol.png" width="40.5" alt="ratn symbol" /></a> |
| [South Indian Bank](./assets/logos/sibl/) | `sibl` | <a href="./assets/logos/sibl/logo.svg"><img src="./assets/previews/sibl-logo.png" width="125" alt="sibl logo" /></a> | <a href="./assets/logos/sibl/symbol.svg"><img src="./assets/previews/sibl-symbol.png" width="40" alt="sibl symbol" /></a> |
| [Tamilnad Mercantile Bank Limited](./assets/logos/tmbl/) | `tmbl` | <a href="./assets/logos/tmbl/logo.svg"><img src="./assets/previews/tmbl-logo.png" width="143.5" alt="tmbl logo" /></a> | <a href="./assets/logos/tmbl/symbol.svg"><img src="./assets/previews/tmbl-symbol.png" width="48" alt="tmbl symbol" /></a> |
| [The Nainital Bank Limited](./assets/logos/ntbl/) | `ntbl` | <a href="./assets/logos/ntbl/logo.svg"><img src="./assets/previews/ntbl-logo.png" width="56" alt="ntbl logo" /></a> | <a href="./assets/logos/ntbl/symbol.svg"><img src="./assets/previews/ntbl-symbol.png" width="48" alt="ntbl symbol" /></a> |
| [Yes Bank](./assets/logos/yesb/) | `yesb` | <a href="./assets/logos/yesb/logo.svg"><img src="./assets/previews/yesb-logo.png" width="112" alt="yesb logo" /></a> | <a href="./assets/logos/yesb/symbol.svg"><img src="./assets/previews/yesb-symbol.png" width="48" alt="yesb symbol" /></a> |

### Small Finance Banks

| Bank Name | Slug | Logo | Symbol |
| --- | --- | --- | --- |
| [AU Small Finance Bank Limited](./assets/logos/aubl/) | `aubl` | <a href="./assets/logos/aubl/logo.svg"><img src="./assets/previews/aubl-logo.png" width="93" alt="aubl logo" /></a> | <a href="./assets/logos/aubl/symbol.svg"><img src="./assets/previews/aubl-symbol.png" width="48" alt="aubl symbol" /></a> |
| [Capital Small Finance Bank](./assets/logos/clbl/) | `clbl` | <a href="./assets/logos/clbl/logo.svg"><img src="./assets/previews/clbl-logo.png" width="216" alt="clbl logo" /></a> | <a href="./assets/logos/clbl/symbol.svg"><img src="./assets/previews/clbl-symbol.png" width="48" alt="clbl symbol" /></a> |
| [Equitas Small Finance Bank](./assets/logos/esfb/) | `esfb` | <a href="./assets/logos/esfb/logo.svg"><img src="./assets/previews/esfb-logo.png" width="186.5" alt="esfb logo" /></a> | <a href="./assets/logos/esfb/symbol.svg"><img src="./assets/previews/esfb-symbol.png" width="48" alt="esfb symbol" /></a> |
| [ESAF Small Finance Bank](./assets/logos/esmf/) | `esmf` | <a href="./assets/logos/esmf/logo.svg"><img src="./assets/previews/esmf-logo.png" width="119" alt="esmf logo" /></a> | <a href="./assets/logos/esmf/symbol.svg"><img src="./assets/previews/esmf-symbol.png" width="48" alt="esmf symbol" /></a> |
| [Jana Small Finance Bank](./assets/logos/jsfb/) | `jsfb` | <a href="./assets/logos/jsfb/logo.svg"><img src="./assets/previews/jsfb-logo.png" width="124.5" alt="jsfb logo" /></a> | <a href="./assets/logos/jsfb/symbol.svg"><img src="./assets/previews/jsfb-symbol.png" width="48" alt="jsfb symbol" /></a> |
| [Shivalik Small Finance Bank](./assets/logos/smcb/) | `smcb` | <a href="./assets/logos/smcb/logo.svg"><img src="./assets/previews/smcb-logo.png" width="186" alt="smcb logo" /></a> | <a href="./assets/logos/smcb/symbol.svg"><img src="./assets/previews/smcb-symbol.png" width="48" alt="smcb symbol" /></a> |
| [slice Small Finance Bank](./assets/logos/nesf/) | `nesf` | <a href="./assets/logos/nesf/logo.svg"><img src="./assets/previews/nesf-logo.png" width="125.5" alt="nesf logo" /></a> | <a href="./assets/logos/nesf/symbol.svg"><img src="./assets/previews/nesf-symbol.png" width="48" alt="nesf symbol" /></a> |
| [Suryoday Small Finance Bank](./assets/logos/sury/) | `sury` | <a href="./assets/logos/sury/logo.svg"><img src="./assets/previews/sury-logo.png" width="193" alt="sury logo" /></a> | <a href="./assets/logos/sury/symbol.svg"><img src="./assets/previews/sury-symbol.png" width="48" alt="sury symbol" /></a> |
| [Ujjivan Small Finance Bank Ltd](./assets/logos/ujvn/) | `ujvn` | <a href="./assets/logos/ujvn/logo.svg"><img src="./assets/previews/ujvn-logo.png" width="216" alt="ujvn logo" /></a> | <a href="./assets/logos/ujvn/symbol.svg"><img src="./assets/previews/ujvn-symbol.png" width="44.5" alt="ujvn symbol" /></a> |
| [Unity Small Finance Bank](./assets/logos/unba/) | `unba` | <a href="./assets/logos/unba/logo.svg"><img src="./assets/previews/unba-logo.png" width="174.5" alt="unba logo" /></a> | <a href="./assets/logos/unba/symbol.svg"><img src="./assets/previews/unba-symbol.png" width="48" alt="unba symbol" /></a> |
| [Utkarsh Small Finance Bank](./assets/logos/utks/) | `utks` | <a href="./assets/logos/utks/logo.svg"><img src="./assets/previews/utks-logo.png" width="115.5" alt="utks logo" /></a> | <a href="./assets/logos/utks/symbol.svg"><img src="./assets/previews/utks-symbol.png" width="48" alt="utks symbol" /></a> |

### Payments Banks

| Bank Name | Slug | Logo | Symbol |
| --- | --- | --- | --- |
| [Airtel Payments Bank](./assets/logos/airp/) | `airp` | <a href="./assets/logos/airp/logo.svg"><img src="./assets/previews/airp-logo.png" width="166" alt="airp logo" /></a> | <a href="./assets/logos/airp/symbol.svg"><img src="./assets/previews/airp-symbol.png" width="47" alt="airp symbol" /></a> |
| [FINO Payments Bank](./assets/logos/fino/) | `fino` | <a href="./assets/logos/fino/logo.svg"><img src="./assets/previews/fino-logo.png" width="216" alt="fino logo" /></a> | <a href="./assets/logos/fino/symbol.svg"><img src="./assets/previews/fino-symbol.png" width="46.5" alt="fino symbol" /></a> |
| [India Post Payments Bank](./assets/logos/ipos/) | `ipos` | <a href="./assets/logos/ipos/logo.svg"><img src="./assets/previews/ipos-logo.png" width="188" alt="ipos logo" /></a> | <a href="./assets/logos/ipos/symbol.svg"><img src="./assets/previews/ipos-symbol.png" width="48" alt="ipos symbol" /></a> |
| [Jio Payments Bank](./assets/logos/jiop/) | `jiop` | <a href="./assets/logos/jiop/logo.svg"><img src="./assets/previews/jiop-logo.png" width="56" alt="jiop logo" /></a> | <a href="./assets/logos/jiop/symbol.svg"><img src="./assets/previews/jiop-symbol.png" width="48" alt="jiop symbol" /></a> |
| [Paytm Payments Bank](./assets/logos/pytm/) | `pytm` | <a href="./assets/logos/pytm/logo.svg"><img src="./assets/previews/pytm-logo.png" width="216" alt="pytm logo" /></a> | <a href="./assets/logos/pytm/symbol.svg"><img src="./assets/previews/pytm-symbol.png" width="48" alt="pytm symbol" /></a> |

### Public Sector Banks

| Bank Name | Slug | Logo | Symbol |
| --- | --- | --- | --- |
| [Bank of Baroda](./assets/logos/barb/) | `barb` | <a href="./assets/logos/barb/logo.svg"><img src="./assets/previews/barb-logo.png" width="175.5" alt="barb logo" /></a> | <a href="./assets/logos/barb/symbol.svg"><img src="./assets/previews/barb-symbol.png" width="48" alt="barb symbol" /></a> |
| [Bank of India](./assets/logos/bkid/) | `bkid` | <a href="./assets/logos/bkid/logo.svg"><img src="./assets/previews/bkid-logo.png" width="111.5" alt="bkid logo" /></a> | <a href="./assets/logos/bkid/symbol.svg"><img src="./assets/previews/bkid-symbol.png" width="42.5" alt="bkid symbol" /></a> |
| [Bank of Maharashtra](./assets/logos/mahb/) | `mahb` | <a href="./assets/logos/mahb/logo.svg"><img src="./assets/previews/mahb-logo.png" width="184.5" alt="mahb logo" /></a> | <a href="./assets/logos/mahb/symbol.svg"><img src="./assets/previews/mahb-symbol.png" width="48" alt="mahb symbol" /></a> |
| [Canara Bank](./assets/logos/cnrb/) | `cnrb` | <a href="./assets/logos/cnrb/logo.svg"><img src="./assets/previews/cnrb-logo.png" width="216" alt="cnrb logo" /></a> | <a href="./assets/logos/cnrb/symbol.svg"><img src="./assets/previews/cnrb-symbol.png" width="48" alt="cnrb symbol" /></a> |
| [Central Bank of India](./assets/logos/cbin/) | `cbin` | <a href="./assets/logos/cbin/logo.svg"><img src="./assets/previews/cbin-logo.png" width="155.5" alt="cbin logo" /></a> | <a href="./assets/logos/cbin/symbol.svg"><img src="./assets/previews/cbin-symbol.png" width="48" alt="cbin symbol" /></a> |
| [Indian Bank](./assets/logos/idib/) | `idib` | <a href="./assets/logos/idib/logo.svg"><img src="./assets/previews/idib-logo.png" width="152.5" alt="idib logo" /></a> | <a href="./assets/logos/idib/symbol.svg"><img src="./assets/previews/idib-symbol.png" width="48" alt="idib symbol" /></a> |
| [Indian Overseas Bank](./assets/logos/ioba/) | `ioba` | <a href="./assets/logos/ioba/logo.svg"><img src="./assets/previews/ioba-logo.png" width="216" alt="ioba logo" /></a> | <a href="./assets/logos/ioba/symbol.svg"><img src="./assets/previews/ioba-symbol.png" width="48" alt="ioba symbol" /></a> |
| [Punjab and Sind Bank](./assets/logos/psib/) | `psib` | <a href="./assets/logos/psib/logo.svg"><img src="./assets/previews/psib-logo.png" width="193.5" alt="psib logo" /></a> | <a href="./assets/logos/psib/symbol.svg"><img src="./assets/previews/psib-symbol.png" width="33" alt="psib symbol" /></a> |
| [Punjab National Bank](./assets/logos/punb/) | `punb` | <a href="./assets/logos/punb/logo.svg"><img src="./assets/previews/punb-logo.png" width="114.5" alt="punb logo" /></a> | <a href="./assets/logos/punb/symbol.svg"><img src="./assets/previews/punb-symbol.png" width="48" alt="punb symbol" /></a> |
| [State Bank of India](./assets/logos/sbin/) | `sbin` | <a href="./assets/logos/sbin/logo.svg"><img src="./assets/previews/sbin-logo.png" width="132.5" alt="sbin logo" /></a> | <a href="./assets/logos/sbin/symbol.svg"><img src="./assets/previews/sbin-symbol.png" width="48" alt="sbin symbol" /></a> |
| [UCO Bank](./assets/logos/ucba/) | `ucba` | <a href="./assets/logos/ucba/logo.svg"><img src="./assets/previews/ucba-logo.png" width="163.5" alt="ucba logo" /></a> | <a href="./assets/logos/ucba/symbol.svg"><img src="./assets/previews/ucba-symbol.png" width="48" alt="ucba symbol" /></a> |
| [Union Bank of India](./assets/logos/ubin/) | `ubin` | <a href="./assets/logos/ubin/logo.svg"><img src="./assets/previews/ubin-logo.png" width="199.5" alt="ubin logo" /></a> | <a href="./assets/logos/ubin/symbol.svg"><img src="./assets/previews/ubin-symbol.png" width="48" alt="ubin symbol" /></a> |

### Foreign Banks

| Bank Name | Slug | Logo | Symbol |
| --- | --- | --- | --- |
| [AB Bank](./assets/logos/abbl/) | `abbl` | <a href="./assets/logos/abbl/logo.svg"><img src="./assets/previews/abbl-logo.png" width="192.5" alt="abbl logo" /></a> | <a href="./assets/logos/abbl/symbol.svg"><img src="./assets/previews/abbl-symbol.png" width="48" alt="abbl symbol" /></a> |
| [Australia and New Zealand Banking Group](./assets/logos/anzb/) | `anzb` | <a href="./assets/logos/anzb/logo.svg"><img src="./assets/previews/anzb-logo.png" width="143.5" alt="anzb logo" /></a> | <a href="./assets/logos/anzb/symbol.svg"><img src="./assets/previews/anzb-symbol.png" width="48" alt="anzb symbol" /></a> |
| [Bank of America](./assets/logos/bofa/) | `bofa` | <a href="./assets/logos/bofa/logo.svg"><img src="./assets/previews/bofa-logo.png" width="216" alt="bofa logo" /></a> | <a href="./assets/logos/bofa/symbol.svg"><img src="./assets/previews/bofa-symbol.png" width="48" alt="bofa symbol" /></a> |
| [Bank of Bahrain and Kuwait](./assets/logos/bbkm/) | `bbkm` | <a href="./assets/logos/bbkm/logo.svg"><img src="./assets/previews/bbkm-logo.png" width="87" alt="bbkm logo" /></a> | <a href="./assets/logos/bbkm/symbol.svg"><img src="./assets/previews/bbkm-symbol.png" width="48" alt="bbkm symbol" /></a> |
| [Bank of Ceylon](./assets/logos/bcey/) | `bcey` | <a href="./assets/logos/bcey/logo.svg"><img src="./assets/previews/bcey-logo.png" width="81.5" alt="bcey logo" /></a> | <a href="./assets/logos/bcey/symbol.svg"><img src="./assets/previews/bcey-symbol.png" width="48" alt="bcey symbol" /></a> |
| [Barclays Bank](./assets/logos/barc/) | `barc` | <a href="./assets/logos/barc/logo.svg"><img src="./assets/previews/barc-logo.png" width="216" alt="barc logo" /></a> | <a href="./assets/logos/barc/symbol.svg"><img src="./assets/previews/barc-symbol.png" width="48" alt="barc symbol" /></a> |
| [BNP Paribas](./assets/logos/bnpa/) | `bnpa` | <a href="./assets/logos/bnpa/logo.svg"><img src="./assets/previews/bnpa-logo.png" width="209" alt="bnpa logo" /></a> | <a href="./assets/logos/bnpa/symbol.svg"><img src="./assets/previews/bnpa-symbol.png" width="48" alt="bnpa symbol" /></a> |
| [Citibank](./assets/logos/citi/) | `citi` | <a href="./assets/logos/citi/logo.svg"><img src="./assets/previews/citi-logo.png" width="85.5" alt="citi logo" /></a> | <a href="./assets/logos/citi/symbol.svg"><img src="./assets/previews/citi-symbol.png" width="48" alt="citi symbol" /></a> |
| [Crédit Agricole Corporate and Investment Bank](./assets/logos/crly/) | `crly` | <a href="./assets/logos/crly/logo.svg"><img src="./assets/previews/crly-logo.png" width="145" alt="crly logo" /></a> | <a href="./assets/logos/crly/symbol.svg"><img src="./assets/previews/crly-symbol.png" width="48" alt="crly symbol" /></a> |
| [CTBC Bank](./assets/logos/ctcb/) | `ctcb` | <a href="./assets/logos/ctcb/logo.svg"><img src="./assets/previews/ctcb-logo.png" width="216" alt="ctcb logo" /></a> | <a href="./assets/logos/ctcb/symbol.svg"><img src="./assets/previews/ctcb-symbol.png" width="48" alt="ctcb symbol" /></a> |
| [DBS Bank India](./assets/logos/dbss/) | `dbss` | <a href="./assets/logos/dbss/logo.svg"><img src="./assets/previews/dbss-logo.png" width="154.5" alt="dbss logo" /></a> | <a href="./assets/logos/dbss/symbol.svg"><img src="./assets/previews/dbss-symbol.png" width="48" alt="dbss symbol" /></a> |
| [Deutsche Bank](./assets/logos/deut/) | `deut` | <a href="./assets/logos/deut/logo.svg"><img src="./assets/previews/deut-logo.png" width="216" alt="deut logo" /></a> | <a href="./assets/logos/deut/symbol.svg"><img src="./assets/previews/deut-symbol.png" width="48" alt="deut symbol" /></a> |
| [Emirates NBD Bank](./assets/logos/ebil/) | `ebil` | <a href="./assets/logos/ebil/logo.svg"><img src="./assets/previews/ebil-logo.png" width="162" alt="ebil logo" /></a> | <a href="./assets/logos/ebil/symbol.svg"><img src="./assets/previews/ebil-symbol.png" width="48" alt="ebil symbol" /></a> |
| [First Abu Dhabi Bank](./assets/logos/nbad/) | `nbad` | <a href="./assets/logos/nbad/logo.svg"><img src="./assets/previews/nbad-logo.png" width="81.5" alt="nbad logo" /></a> | — |
| [FirstRand Bank](./assets/logos/firn/) | `firn` | <a href="./assets/logos/firn/logo.svg"><img src="./assets/previews/firn-logo.png" width="139" alt="firn logo" /></a> | <a href="./assets/logos/firn/symbol.svg"><img src="./assets/previews/firn-symbol.png" width="48" alt="firn symbol" /></a> |
| [Hana Bank](./assets/logos/koex/) | `koex` | <a href="./assets/logos/koex/logo.svg"><img src="./assets/previews/koex-logo.png" width="199" alt="koex logo" /></a> | <a href="./assets/logos/koex/symbol.svg"><img src="./assets/previews/koex-symbol.png" width="48" alt="koex symbol" /></a> |
| [HSBC](./assets/logos/hsbc/) | `hsbc` | <a href="./assets/logos/hsbc/logo.svg"><img src="./assets/previews/hsbc-logo.png" width="164.5" alt="hsbc logo" /></a> | <a href="./assets/logos/hsbc/symbol.svg"><img src="./assets/previews/hsbc-symbol.png" width="48" alt="hsbc symbol" /></a> |
| [Industrial and Commercial Bank of China](./assets/logos/icbk/) | `icbk` | <a href="./assets/logos/icbk/logo.svg"><img src="./assets/previews/icbk-logo.png" width="137.5" alt="icbk logo" /></a> | <a href="./assets/logos/icbk/symbol.svg"><img src="./assets/previews/icbk-symbol.png" width="48" alt="icbk symbol" /></a> |
| [Industrial Bank of Korea](./assets/logos/ibko/) | `ibko` | <a href="./assets/logos/ibko/logo.svg"><img src="./assets/previews/ibko-logo.png" width="153.5" alt="ibko logo" /></a> | <a href="./assets/logos/ibko/symbol.svg"><img src="./assets/previews/ibko-symbol.png" width="48" alt="ibko symbol" /></a> |
| [J.P. Morgan Chase Bank](./assets/logos/chas/) | `chas` | <a href="./assets/logos/chas/logo.svg"><img src="./assets/previews/chas-logo.png" width="213.5" alt="chas logo" /></a> | — |
| [KB Kookmin Bank](./assets/logos/kbkb/) | `kbkb` | <a href="./assets/logos/kbkb/logo.svg"><img src="./assets/previews/kbkb-logo.png" width="216" alt="kbkb logo" /></a> | <a href="./assets/logos/kbkb/symbol.svg"><img src="./assets/previews/kbkb-symbol.png" width="48" alt="kbkb symbol" /></a> |
| [Mashreq Bank](./assets/logos/mshq/) | `mshq` | <a href="./assets/logos/mshq/logo.svg"><img src="./assets/previews/mshq-logo.png" width="216" alt="mshq logo" /></a> | <a href="./assets/logos/mshq/symbol.svg"><img src="./assets/previews/mshq-symbol.png" width="48" alt="mshq symbol" /></a> |
| [Maybank Indonesia](./assets/logos/ibbk/) | `ibbk` | <a href="./assets/logos/ibbk/logo.svg"><img src="./assets/previews/ibbk-logo.png" width="162.5" alt="ibbk logo" /></a> | <a href="./assets/logos/ibbk/symbol.svg"><img src="./assets/previews/ibbk-symbol.png" width="48" alt="ibbk symbol" /></a> |
| [Mizuho Bank](./assets/logos/mhcb/) | `mhcb` | <a href="./assets/logos/mhcb/logo.svg"><img src="./assets/previews/mhcb-logo.png" width="150.5" alt="mhcb logo" /></a> | — |
| [MUFG Bank](./assets/logos/botm/) | `botm` | <a href="./assets/logos/botm/logo.svg"><img src="./assets/previews/botm-logo.png" width="186.5" alt="botm logo" /></a> | <a href="./assets/logos/botm/symbol.svg"><img src="./assets/previews/botm-symbol.png" width="48" alt="botm symbol" /></a> |
| [NatWest Markets](./assets/logos/abna/) | `abna` | <a href="./assets/logos/abna/logo.svg"><img src="./assets/previews/abna-logo.png" width="131" alt="abna logo" /></a> | <a href="./assets/logos/abna/symbol.svg"><img src="./assets/previews/abna-symbol.png" width="48" alt="abna symbol" /></a> |
| [Qatar National Bank](./assets/logos/qnba/) | `qnba` | <a href="./assets/logos/qnba/logo.svg"><img src="./assets/previews/qnba-logo.png" width="153.5" alt="qnba logo" /></a> | <a href="./assets/logos/qnba/symbol.svg"><img src="./assets/previews/qnba-symbol.png" width="48" alt="qnba symbol" /></a> |
| [Rabobank](./assets/logos/rabo/) | `rabo` | <a href="./assets/logos/rabo/logo.svg"><img src="./assets/previews/rabo-logo.png" width="216" alt="rabo logo" /></a> | <a href="./assets/logos/rabo/symbol.svg"><img src="./assets/previews/rabo-symbol.png" width="48" alt="rabo symbol" /></a> |
| [Sberbank](./assets/logos/sabr/) | `sabr` | <a href="./assets/logos/sabr/logo.svg"><img src="./assets/previews/sabr-logo.png" width="216" alt="sabr logo" /></a> | <a href="./assets/logos/sabr/symbol.svg"><img src="./assets/previews/sabr-symbol.png" width="48" alt="sabr symbol" /></a> |
| [SBM Bank India](./assets/logos/stcb/) | `stcb` | <a href="./assets/logos/stcb/logo.svg"><img src="./assets/previews/stcb-logo.png" width="170.5" alt="stcb logo" /></a> | <a href="./assets/logos/stcb/symbol.svg"><img src="./assets/previews/stcb-symbol.png" width="48" alt="stcb symbol" /></a> |
| [Scotiabank](./assets/logos/nosc/) | `nosc` | <a href="./assets/logos/nosc/logo.svg"><img src="./assets/previews/nosc-logo.png" width="216" alt="nosc logo" /></a> | <a href="./assets/logos/nosc/symbol.svg"><img src="./assets/previews/nosc-symbol.png" width="48" alt="nosc symbol" /></a> |
| [Shinhan Bank](./assets/logos/shbk/) | `shbk` | <a href="./assets/logos/shbk/logo.svg"><img src="./assets/previews/shbk-logo.png" width="216" alt="shbk logo" /></a> | <a href="./assets/logos/shbk/symbol.svg"><img src="./assets/previews/shbk-symbol.png" width="48" alt="shbk symbol" /></a> |
| [Société Générale](./assets/logos/soge/) | `soge` | <a href="./assets/logos/soge/logo.svg"><img src="./assets/previews/soge-logo.png" width="216" alt="soge logo" /></a> | <a href="./assets/logos/soge/symbol.svg"><img src="./assets/previews/soge-symbol.png" width="48" alt="soge symbol" /></a> |
| [Sonali Bank](./assets/logos/sbld/) | `sbld` | — | <a href="./assets/logos/sbld/symbol.svg"><img src="./assets/previews/sbld-symbol.png" width="48" alt="sbld symbol" /></a> |
| [Standard Chartered Bank](./assets/logos/scbl/) | `scbl` | <a href="./assets/logos/scbl/logo.svg"><img src="./assets/previews/scbl-logo.png" width="118" alt="scbl logo" /></a> | <a href="./assets/logos/scbl/symbol.svg"><img src="./assets/previews/scbl-symbol.png" width="36" alt="scbl symbol" /></a> |
| [Sumitomo Mitsui Banking Corporation](./assets/logos/smbc/) | `smbc` | <a href="./assets/logos/smbc/logo.svg"><img src="./assets/previews/smbc-logo.png" width="155" alt="smbc logo" /></a> | <a href="./assets/logos/smbc/symbol.svg"><img src="./assets/previews/smbc-symbol.png" width="48" alt="smbc symbol" /></a> |
| [United Overseas Bank](./assets/logos/uovb/) | `uovb` | <a href="./assets/logos/uovb/logo.svg"><img src="./assets/previews/uovb-logo.png" width="157" alt="uovb logo" /></a> | <a href="./assets/logos/uovb/symbol.svg"><img src="./assets/previews/uovb-symbol.png" width="48" alt="uovb symbol" /></a> |
| [Woori Bank](./assets/logos/hvbk/) | `hvbk` | <a href="./assets/logos/hvbk/logo.svg"><img src="./assets/previews/hvbk-logo.png" width="216" alt="hvbk logo" /></a> | <a href="./assets/logos/hvbk/symbol.svg"><img src="./assets/previews/hvbk-symbol.png" width="48" alt="hvbk symbol" /></a> |
<!-- BANKS_TABLE_END -->

## Optimizing & Converting

Optimize SVGs (preserves `viewBox`):

```sh
pnpm install
pnpm run optimize
```

Convert SVGs to PNG or AVIF. By default, writes 1x PNGs alongside each SVG in `assets/logos/`:

```sh
pnpm run convert
```

We ship 1x PNGs alongside every SVG. If you need AVIF or higher-density variants, pass a format, scale factor, and output directory:

```sh
# 2x AVIFs into ./dist
pnpm run convert -- --format avif --scale 2 --out dist
```

**Flags**

| Flag              | Values       | Default           | Notes                                        |
| ----------------- | ------------ | ----------------- | -------------------------------------------- |
| `-f`, `--format`  | `png`, `avif`| `png`             |                                              |
| `-s`, `--scale`   | `1`, `2`, `3`| `1`               | 1x uses intrinsic SVG dimensions             |
| `-o`, `--out`     | any dir      | `assets/logos/`   | If omitted, overwrites files in the repo     |

Output is named `logo.png` at 1x, `logo@2x.png` at 2x, `logo@3x.png` at 3x (and the same pattern for AVIF).

## Contributors
<a href="https://github.com/praveenpuglia/indian-banks/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=praveenpuglia/indian-banks" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
