import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appRupiahFormat]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RupiahFormatDirective),
      multi: true
    }
  ]
})
export class RupiahFormatDirective implements ControlValueAccessor {

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Format nilai saat input berubah
  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Simpan nilai asli tanpa format rupiah
    const numericValue = value.replace(/[^0-9]/g, '');
    this.onChange(numericValue);

    // Tampilkan nilai yang diformat di input
    input.value = this.formatRupiah(numericValue);
  }

  // Mengubah tampilan saat nilai model berubah
  writeValue(value: any): void {
    if (value) {
      const formattedValue = this.formatRupiah(value);
      this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'value', '');
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }

  // Fungsi untuk format angka menjadi Rupiah
  private formatRupiah(value: string): string {
    if (!value) return '';
    return 'Rp ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
