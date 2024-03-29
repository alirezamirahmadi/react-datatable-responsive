export const defaultPrintProps = {
  copyStyles: true,
  pageStyle: `
      @page {
          /* Remove browser default header (title) and footer (url) */
          margin: 0;
      }
      @media print {
          body {
              /* Tell browsers to print background colors */
              -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
              color-adjust: exact; /* Firefox */
          }
      }
  `,
  removeAfterPrint: false,
  suppressErrors: false,
};