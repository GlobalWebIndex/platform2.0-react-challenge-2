import { StyledContainer, StyledInput, StyledButton, StyledTooltip } from './styles';

type Props = {
    url: string;
};

export default function CopyToClipBoard({url}: Props) {
    function copyUrl() {
        /* Get the text field */
        let copyText: HTMLInputElement = document.getElementById(`urlfield ${url}`) as HTMLInputElement;
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999);
      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        copyText.blur();
        let tooltip: HTMLElement = document.getElementById(`tooltip ${url}`) as HTMLElement;
        tooltip.style.display = 'inline';
        setTimeout( function() {
            tooltip.style.display = 'none';
        }, 1000);

      } 

    return(
        <StyledContainer>
            <StyledInput 
                type='text'
                value={url}
                readOnly
                id={`urlfield ${url}`}
            />
            <StyledTooltip id={`tooltip ${url}`}>
                Copied!
            </StyledTooltip>
            <StyledButton onClick={copyUrl}>
                Copy
            </StyledButton>
        </StyledContainer>
    )
}