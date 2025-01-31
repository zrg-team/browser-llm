import { create, useModal } from '@ebay/nice-modal-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/lib/shadcn/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'src/lib/shadcn/ui/dialog'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from 'src/lib/shadcn/ui/input-otp'

export type SessionPassphraseDialogProps = {
  className: string
  onConfirm: (newValue: string) => void
  onCancel: () => void
}

const SessionPassphraseDialog = create<SessionPassphraseDialogProps>(({ onConfirm, onCancel }) => {
  const currentModal = useModal()
  const { t } = useTranslation('dialogs')
  const [name, setName] = useState('')

  const handleChangeOTP = (newValue: string) => {
    setName(newValue)
  }

  const handleSubmit = async () => {
    onConfirm(name)
    setName('')
  }

  const handleHide = () => {
    onCancel()
    currentModal.hide()
    setName('')
  }

  return (
    <Dialog open={currentModal.visible} onOpenChange={handleHide}>
      <DialogContent className="w-[330px]">
        <DialogHeader>
          <DialogTitle>{t('session_passkey.title')}</DialogTitle>
          <DialogDescription>{t('session_passkey.description')}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <InputOTP onChange={handleChangeOTP} maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} hidden />
              <InputOTPSlot index={1} hidden />
              <InputOTPSlot index={2} hidden />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} hidden />
              <InputOTPSlot index={4} hidden />
              <InputOTPSlot index={5} hidden />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            {t('session_passkey.confirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})

export default SessionPassphraseDialog
