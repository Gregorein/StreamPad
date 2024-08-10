import { Button, DialogActions, DialogContent, DialogTitle, Modal, ModalDialog } from "@mui/joy"
import { ReactNode } from "react"

interface DialogProps {
	open: boolean
	title: string
	text: string
	onCancel: () => void
	labelCancel: string
	iconCancel?: ReactNode
	onConfirm: () => void
	labelConfirm: string
	iconConfirm?: ReactNode
}

const Dialog = ({
	open,
	title,
	text,
	onCancel,
	labelCancel,
	iconCancel = undefined,
	onConfirm,
	labelConfirm,
	iconConfirm = undefined
}: DialogProps): ReactNode => (
	<Modal
		open={open}
		onClose={onCancel}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<ModalDialog variant="plain">
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent id="alert-dialog-description">{text}</DialogContent>
			<DialogActions>
				<Button startDecorator={iconCancel} onClick={onCancel} color="danger">
					{labelCancel}
				</Button>
				<Button startDecorator={iconConfirm} onClick={onConfirm} color="success">
					{labelConfirm}
				</Button>
			</DialogActions>
		</ModalDialog>
	</Modal>
)

export default Dialog
